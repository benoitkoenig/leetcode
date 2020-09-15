module Cycle(main) where

goto :: Eq a => Bool -> a -> a -> [(a, a)] -> [[a]]
goto False a b _ | a == b = [[a]]
goto _ a b edges = [a:x | y <- edges, fst y == a, x <- goto False (snd y) b newEdges]
  where newEdges = filter ((a /=) . fst) edges

cycle' :: Eq a => a -> [(a, a)] -> [[a]]
cycle' a edges = goto True a a edges

main :: IO ()
main = do
  print $ cycle' 2 [(1,2),(2,3),(1,3),(3,4),(4,2),(5,6)]
