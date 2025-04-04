
package esinf.utils.adjacencymatrixgraph;

import java.util.LinkedList;
import java.util.Iterator;

/**
 * Implementation of graph algorithms for a (undirected) graph structure 
 * Considering generic vertex V and edge E types
 * 
 * Works on AdjancyMatrixGraph objects
 * 
 * @author DEI-ESINF
 * 
 */
public class GraphAlgorithms {

    
    /**
     * Performs depth-first search of the graph starting at vertex.
     * Calls package recursive version of the method.
     *
     * @param graph Graph object
     * @param vertex Vertex of graph that will be the source of the search
     * @return queue of vertices found by search (including vertex), null if vertex does not exist
     *
     */
    public static <V,E> LinkedList<V> BFS(AdjacencyMatrixGraph<V,E> graph, V vertex) {

       int index = graph.toIndex(vertex);
        if (index == -1)
            return null;

        LinkedList<V> resultQueue = new LinkedList<V>();
        LinkedList<Integer> auxQueue = new LinkedList<Integer>();

        resultQueue.add(graph.vertices.get(index));
        auxQueue.add(index);

        while(!auxQueue.isEmpty()){
            index=auxQueue.remove(); 
            for (int i = 0 ; i < graph.numVertices ; i++){
                if (graph.edgeMatrix[index][i] != null){
                    if (!resultQueue.contains(graph.vertices.get(i))){
                        resultQueue.add(graph.vertices.get(i));
                        auxQueue.add(i);
                    }
                }
            }
        }
        return resultQueue;	
    }

    /**
     * Performs depth-first search of the graph starting at vertex.
     * Calls package recursive version of the method.
     * @param graph Graph object
     * @param vertex Vertex of graph that will be the source of the search
     * @return queue of vertices found by search (empty if none), null if vertex does not exist
     */
    public static <V,E> LinkedList<V> DFS(AdjacencyMatrixGraph<V,E> graph, V vertex) {
     throw new UnsupportedOperationException("Not supported yet.");	
    }

    /**
     * Actual depth-first search of the graph starting at vertex.
     * The method adds discovered vertices (including vertex) to the queue of vertices
     * @param graph Graph object
     * @param index Index of vertex of graph that will be the source of the search
     * @param verticesQueue queue of vertices found by search
     *
     */
    static <V,E> void DFS(AdjacencyMatrixGraph<V,E> graph, int index, LinkedList<V> verticesQueue) {
    		throw new UnsupportedOperationException("Not supported yet.");	
    }
    

    /**
     * Transforms a graph into its transitive closure 
     * uses the Floyd-Warshall algorithm
     * 
     * @param graph Graph object
     * @param dummyEdge object to insert in the newly created edges
     * @return the new graph 
     */
    public static <V, E> AdjacencyMatrixGraph<V, E> transitiveClosure(AdjacencyMatrixGraph<V, E> graph, E dummyEdge){
            throw new UnsupportedOperationException("Not supported yet.");	
    }

}
