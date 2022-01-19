using System;

namespace Comments
{
    class Program
    {
        /// XML Comments are used to help provide documentation
        /// They start with triple-slashes and have a special syntax
        ///<summary>
        ///This is the main sample app
        ///</summary>
        ///<param name='args'>An array of strings in command</param>
        ///<returns>
        ///No returns
        ///</returns>
        static void Main(string[] args)
        {
            //Single line comments
            Console.WriteLine("Hello World!");
            /*Multiple line comments
            words
            words
            */
        }
    }
}
