class GlobalClass {
    constructor() {
        this.csharp = {
            "C# Hello World": `using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");
        }
    }
}`
        };
    }

}

// Create an instance of the GlobalClass
const globalInstance = new GlobalClass();

// Assign the instance to the global object
// In browsers:
window.globalInstance = globalInstance;