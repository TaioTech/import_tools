// let WeightedGraph = require('./WeightedGraph');
// Min
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) { if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [] }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  } // addEdge

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) { // Build initial state
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) { // while there are values in nodes
      smallest = nodes.dequeue().val; // first smallest is start
      if (smallest === finish) {  // DONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distance  to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          console.log(nextNeighbor);
          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          } // if (candidate < distances[nextNeighbor])
        } // for (let neighbor in this.adjacencyList[smallest])
      } // if (smallest || distances[smallest] !== Infinity)
    } // while (nodes.values.length)
    return path.concat(smallest).reverse();
  } // Dijkstra
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);

console.log(graph.Dijkstra("A", "E"));
// console.log(graph.adjacencyList);



