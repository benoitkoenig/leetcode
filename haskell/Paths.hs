module Paths(main) where

paths :: Eq a => a -> a -> [(a, a)] -> [[a]]
paths a b _ | a == b = [[a]]
paths a b edges = map (a:) subPaths
  where
    newStarts = map snd $ filter ((a==) . fst) edges
    newEdges = filter ((a/=) . snd) edges
    subPaths = concat $ map (\x -> paths x b newEdges) newStarts

main :: IO ()
main = do
  print $ paths 1 4 [(1,2),(2,3),(1,3),(3,4),(4,2),(5,6)]
