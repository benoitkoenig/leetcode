module ConnectedComponents(main) where

import Data.List
import Data.Set (toList, fromList)

getConnectedElements :: [(Int, Int)] -> (Int, Int) -> [(Int, Int)]
getConnectedElements edges edge = edge:(concat $ map (getConnectedElements (edges \\ neighbors)) neighbors)
  where neighbors = filter (\(a, b) -> a == fst edge || a == snd edge || b == fst edge || b == snd edge) edges

connectedEdges :: [(Int, Int)] -> [[(Int, Int)]]
connectedEdges [] = []
connectedEdges edges = newComponent:(connectedEdges edgesLeft)
  where initEdge = head edges
        newComponent = getConnectedElements (edges \\ [initEdge]) initEdge
        edgesLeft = edges \\ newComponent

removeDuplicate = toList . fromList

connectedComponents = (map (removeDuplicate . (concatMap (\(a, b) -> [a, b])))) . connectedEdges

main :: IO ()
main = do
  print $ connectedComponents [(1,2),(2,3),(1,4),(3,4),(5,2),(5,4),(6,7)]
