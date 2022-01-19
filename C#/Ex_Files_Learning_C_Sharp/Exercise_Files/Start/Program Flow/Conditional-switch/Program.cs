using System;

namespace ConditionalOps
{
    class Program
    {
        static void Main(string[] args)
        {
            int theVal = 10;

            // TODO: The switch statement
            switch(theVal){
                case 50:
                    Console.WriteLine("theVal is 50");
                    break;
                case 51:
                    Console.WriteLine("theVal is 51");
                    break;
                case 52:
                case 53:
                    Console.WriteLine("theVal is between 51-53");
                    break;
                default:
                    Console.WriteLine("theVal is something else");
                    break;
            }

        }
    }
}
