using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("What is your name?");
            String str = Console.ReadLine();
            Console.WriteLine("Why, Hello there " + str);
        }
    }
}
/*also can be written like:
using System;

Console.WriteLine("Hello World!");
Console.WriteLine("What is your name?");
String str = Console.ReadLine();
Console.WriteLine("Why, Hello there " + str);
*/