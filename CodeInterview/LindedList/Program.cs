using System;

namespace LindedList
{   //Node
    //Node Chain
    //Linked List
    //Doubly Linked List
    class Program
    {
        static void Main(string[] args)
        {
            Node first = new Node { Value = 3 };
            Node middel = new Node { Value = 5 };
            Node last = new Node { Value = 7 };

            first.Next = middel;
            middel.Next = last;

            PrintNodeList(first);

            Console.ReadLine();
        }

        private static void PrintNodeList(Node node)
        {
            while (node != null)
            {
                Console.WriteLine(node.Value);
                node = node.Next;
            }
        }
    }
    public class Node
    {
        public int Value { get; set; }
        public Node Next { get; set; }
    }
}