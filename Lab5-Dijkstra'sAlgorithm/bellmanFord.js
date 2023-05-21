class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  bellmanFord(startVertex) {
    const distances = {};
    const previous = {};

    // Step 1: Initialize distances and previous values
    for (let vertex of this.vertices) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }
    distances[startVertex] = 0;

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < this.vertices.length - 1; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        const { source, destination, weight } = this.edges[j];

        if (
          distances[source] !== Infinity &&
          distances[source] + weight < distances[destination]
        ) {
          distances[destination] = distances[source] + weight;
          previous[destination] = source;
        }
      }
    }

    // Step 3: Check for negative-weight cycles
    for (let i = 0; i < this.edges.length; i++) {
      const { source, destination, weight } = this.edges[i];

      if (
        distances[source] !== Infinity &&
        distances[source] + weight < distances[destination]
      ) {
        throw new Error("Graph contains a negative-weight cycle.");
      }
    }

    return { distances, previous };
  }

  getPath(previous, endVertex) {
    const path = [];
    let currentVertex = endVertex;

    while (currentVertex !== null) {
      path.unshift(currentVertex);
      currentVertex = previous[currentVertex];
    }

    return path;
  }
}

// Example usage:
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  { source: "A", destination: "B", weight: 4 },
  { source: "A", destination: "C", weight: 2 },
  { source: "B", destination: "E", weight: 3 },
  { source: "C", destination: "D", weight: 2 },
  { source: "C", destination: "F", weight: 4 },
  { source: "D", destination: "E", weight: 3 },
  { source: "D", destination: "F", weight: 1 },
  { source: "E", destination: "F", weight: 1 },
];

const graph = new Graph(vertices, edges);

// Running Bellman-Ford algorithm
const { distances, previous } = graph.bellmanFord("A");

// Getting shortest path from A to E
const path = graph.getPath(previous, "E");
console.log("Shortest path:", path);
console.log("Distances:", distances);
