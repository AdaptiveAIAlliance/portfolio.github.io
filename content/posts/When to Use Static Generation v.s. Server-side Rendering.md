---
title: "Getting Started with Elixir: A Beginner's Tutorial"
date: "2025-04-10"
tags:
  - elixir
  - beginner
  - functional programming
  - mix
  - iex
  - testing
  - cli
  - tutorial

categories:
  - Programming
  - Elixir
  - Functional Programming
featImage: "Getting Started with Elixir: A Beginner's Tutorial.jpg"
alt: "test"
author: "john Due"
authorImage: "/AAA_profile_pic.png"
intro: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications."
---

Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang VM (BEAM), known for its ability to handle millions of concurrent connections—perfect for web apps, real-time systems, and more.

In this tutorial, we'll walk through the basics of Elixir by building a simple CLI calculator. By the end, you'll have a solid foundation to build more complex Elixir applications.

## 🧰 Prerequisites

- Elixir installed (see [elixir-lang.org/install.html](https://elixir-lang.org/install.html))
- Basic understanding of programming concepts

Verify your installation:

```bash
elixir -v
```

## 🏗️ Create a New Project

Elixir comes with a build tool called Mix. Let's create a new project:

```bash
mix new calculator
cd calculator
```

This creates a scaffold with the following structure:

```bash
calculator/
├── lib/
│ └── calculator.ex
├── test/
│ └── calculator_test.exs
├── mix.exs
```

## ✏️ Writing Your First Elixir Function

Open lib/calculator.ex and replace the contents with:

```elixir
defmodule Calculator do
def add(a, b), do: a + b
def subtract(a, b), do: a - b
def multiply(a, b), do: a \* b
def divide(a, b) when b != 0, do: a / b
def divide(\_, 0), do: {:error, "Cannot divide by zero"}
end
```

We’ve just defined a simple module with basic arithmetic functions. Notice how Elixir uses pattern matching (when b != 0) for control flow.

## 🧪 Writing Tests

Let’s write tests for our functions. Open test/calculator_test.exs and update it:

```elixir

defmodule CalculatorTest do
use ExUnit.Case
doctest Calculator

test "addition" do
assert Calculator.add(1, 2) == 3
end

test "subtraction" do
assert Calculator.subtract(5, 3) == 2
end

test "multiplication" do
assert Calculator.multiply(4, 3) == 12
end

test "division" do
assert Calculator.divide(10, 2) == 5.0
assert Calculator.divide(10, 0) == {:error, "Cannot divide by zero"}
end
end
```

Run the tests:

```bash
mix test
```

✅ You should see green output if all tests pass.

## 🧑‍💻 Running It from the Terminal

Want to run your functions manually? Use iex (Interactive Elixir):

```bash
iex -S mix
```

Now you can call:

```elixir
Calculator.add(10, 5)
```

## 🌟 Next Steps

You’ve just written your first Elixir module and tests! Here are some directions you can go next:

Learn about Pattern Matching

Explore Recursion in Elixir

Dive into Phoenix Framework for web development

Try writing a GenServer to learn OTP fundamentals
Happy coding with Elixir! ⚡️
