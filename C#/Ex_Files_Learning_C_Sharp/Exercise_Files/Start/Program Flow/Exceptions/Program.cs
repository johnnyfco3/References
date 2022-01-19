using System;

namespace Exceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 100;
            int y = 10;
            int result;

            // TODO: try-catch expressions make error checking easier
            try{
                result = x / y;
                Console.WriteLine("The result is: {0}", result);
            }
            catch{
                Console.WriteLine("Error comes up");
            }
            finally{
                Console.WriteLine("The code will always run");
            }
        }
    }
}
