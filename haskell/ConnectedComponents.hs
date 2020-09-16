module ConnectedComponents(main) where

import Control.Applicative (liftA2)
import Data.Set (toList, fromList)

contains :: [Int] -> (Int, Int) -> Bool
contains a (b, c) = or $ map (liftA2 (||) (b==) (c==)) a

getConnectedElements :: [(Int, Int)] -> Int -> [Int]
getConnectedElements edges x = x:(concat $ map (getConnectedElements newEdges) neighbors)
  where neighbors = map (\(a, b) -> if a == x then b else a) $ filter (contains [x]) edges
        newEdges = filter (not . (contains [x])) edges

connectedComponents :: [(Int, Int)] -> [[Int]]
connectedComponents [] = []
connectedComponents edges = newComponent:(connectedComponents edgesLeft)
  where newComponent = toList $ fromList $ getConnectedElements edges $ (fst . head) edges
        edgesLeft = filter (not . (contains newComponent)) edges

main :: IO ()
main = do
  print $ connectedComponents [(1,2),(2,3),(1,4),(3,4),(5,2),(5,4),(6,7)]
