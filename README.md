# NestJS Course

In this project we will follow a course about NestJS, on Udemy!

Anything related to NestJS, we can go to the [Official Documentation](https://docs.nestjs.com/)

## 1. Creating a Project

We can create a project like this: `npm nest new <project_name>`
This will create a folder with the **project name** you passed with the base files that NestJS has 🚀

## 2. Using NestJS CLI

We can use NestJS CLI to create modules, controllers, services, etc
Tip: If you want to know how a given command from NEstJS would do, just append `--dry-run` to the end of a command. This will show you the updates it will do in your project 💪

## 2.1 Creating a module

Let's use the CLI with this command: `nest generate module <module_name>`

This will do the following:

- will create a directory named **module_name** with a file `module_name.module.ts`
- will update the `app.module.ts` file with the dependency for this new module

## 2.2 Creating a controller

Let's use the CLI with this command: `nest generate controller <module_name>`

This will do the following:

- will create a file called `<module_name>.controller.ts` file
- will create a file called `<module_name>.controller.spec.ts` file (this one is for tests)
- will update the `users.module.ts` file with the new controller dependency
