# VectorShift Pipeline Builder

A visual pipeline builder inspired by VectorShift that allows users to construct workflows using draggable nodes, connect them visually, define dynamic inputs, and validate pipelines via a backend service.

---

## Overview

This project is a **node-based workflow editor** where users can:

- Drag and drop different node types (Input, LLM, Text, Output, etc.)
- Connect nodes to form a pipeline
- Define dynamic variables inside Text nodes using `{{variable}}` syntax
- Submit the pipeline to a backend for validation
- Receive feedback on:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a Directed Acyclic Graph (DAG)

The project demonstrates **frontend abstraction, state management, UI logic, and backend graph validation**.

---

## Goals of the Project

This project was built to address four key engineering problems:

1. **Avoid duplicated node code**  
   Multiple node components shared layout, styling, and handle logic, which becomes hard to maintain as the system grows.

2. **Make node creation scalable**  
   Adding new nodes should be fast and require minimal boilerplate.

3. **Improve Text node usability**  
   Text nodes should dynamically resize and expose inputs based on user-defined variables.

4. **Validate pipelines before execution**  
   Pipelines should be analyzed server-side to ensure they are valid DAGs.

---

## Architecture Overview

### Frontend
- **React**
- **React Flow** – visual node editor
- **Zustand** – state management
- **Custom Node Abstraction**

### Backend
- **FastAPI**
- **Graph traversal (DFS)** for DAG validation
- **REST API** integration

---

## Node Abstraction

All nodes share a common structure:
- Container
- Header
- Styling
- Input/Output handles

To avoid duplication, a reusable `BaseNode` component was created.

Each node only defines:
- Its title
- Its input/output handles
- Its internal content

This allows new nodes to be added with minimal code.

---

## Custom Nodes

In addition to the core nodes (Input, LLM, Text, Output), five additional nodes were added to demonstrate flexibility:

- **Math Node** – accepts two inputs and outputs a result
- **Delay Node** – simulates delayed execution
- **Condition Node** – branching logic
- **Logger Node** – logs incoming data
- **Formatter Node** – formats text

All nodes use the same base abstraction.

---

## Text Node Logic (Key Feature)

The Text node includes advanced behavior:

### 1. Auto-Resizing
- The node grows in **height** as lines are added
- The node grows in **width** as text becomes longer
- The entire node resizes, not just the textarea

### 2. Dynamic Variable Handles
Users can define variables directly in the text:

```text
Hello {{name}}
Your order {{orderId}} is ready
