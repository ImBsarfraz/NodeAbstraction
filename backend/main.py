from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# CORS (required for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== Request schema =====
class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

# ===== Endpoint =====
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {n["id"]: [] for n in nodes}

    for e in edges:
        src = e.get("source")
        tgt = e.get("target")
        if src in graph and tgt in graph:
            graph[src].append(tgt)

    visited = set()
    stack = set()

    def has_cycle(node):
        if node in stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        stack.add(node)

        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True

        stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if has_cycle(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }