// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 
    // addVertex(v)
    // addEdge(v, w)
    // printGraph()
 
    // bfs(v)
    // dfs(v)
    addVertex(v)
    {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }
    // add edge to the graph
    addEdge(v, w)
    {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
    
        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }
    // Prints the vertex and adjacency list
    printGraph()
    {
        // get all the vertices
        var get_keys = this.AdjList.keys();
    
        // iterate over the vertices
        for (var i of get_keys)
        {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
    
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
    
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
    
    bfs(startingNode)
    {
    
        // create a visited object
        var visited = {};
    
        // Create an object for queue
        var q = [];
    
        // add the starting node to the queue
        visited[startingNode] = true;
        q.push(startingNode);
    
        // loop until queue is empty
        while (q.length!=0) {
            // get the element from the queue
            var getQueueElement = q.pop();
    
            // passing the current vertex to callback function
            console.log(getQueueElement);
    
            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);
    
            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];
    
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.push(neigh);
                }
            }
        }
    }
}