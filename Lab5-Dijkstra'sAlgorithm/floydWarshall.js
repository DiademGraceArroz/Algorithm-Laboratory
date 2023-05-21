class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = [];

    for (let i = 0; i < this.vertices; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < this.vertices; j++) {
        if (i === j) {
          this.adjMatrix[i][j] = 0;
        } else {
          this.adjMatrix[i][j] = Infinity;
        }
      }
    }
  }

  addEdge(source, destination, weight) {
    this.adjMatrix[source][destination] = weight;
  }

  floydWarshall() {
    const dist = [];

    // Initialize dist matrix with the same values as adjMatrix
    for (let i = 0; i < this.vertices; i++) {
      dist[i] = [];
      for (let j = 0; j < this.vertices; j++) {
        dist[i][j] = this.adjMatrix[i][j];
      }
    }

    // Main algorithm
    for (let k = 0; k < this.vertices; k++) {
      for (let i = 0; i < this.vertices; i++) {
        for (let j = 0; j < this.vertices; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    return dist;
  }
}

// Example usage:
const graph = new Graph(4);

// Adding edges
graph.addEdge(0, 1, 5);
graph.addEdge(0, 3, 10);
graph.addEdge(1, 2, 3);
graph.addEdge(2, 3, 1);

// Running Floyd-Warshall algorithm
const distances = graph.floydWarshall();

console.log("Shortest distances between vertices:");
console.log(distances);
