// Basic Types
let company: string = 'Apple'
let isPublish: boolean = false
let x: any = 'Hello world'
let ids: Array<number> = [1, 2, 3, 4, 5]
ids.push(6)
let arr: any[] = [1, 2, 3, 4, 5, '6', false]
// Tuple
let person: [number, string, boolean] = [1, '110', true]
// Tuple Array
let employees: [number, string][]
employees = [
  [1, '1'],
  [2, '2'],
]
// Union
let id: number | string
id = 1
id = '2'
// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right = 20
}
console.log(Direction1.Down);
console.log(Direction1.Right);
// Object
type User = {
  id: number, name: string
}
const user: User = {
  id: 1,
  name: 'John',
}
// Type Assertion
let cid: any = 1
// let customId = <number>cid
let customId = cid as number
customId = 2
// Function
function addNum(x: number, y: number): number {
  return x + y
}
function incrementNum(x: number) {
  return x++
}
// Interface
interface IUser {
  readonly id: number,
  name: string,
  age?: number
}
const user2: IUser = {
  id: 2,
  name: 'Smith',
}
// user2.id = 3
interface IMathFunc {
  (x: number, y: number): number
}
const add: IMathFunc = (x: number, y: number): number => {
  return x + y
}
const sub: IMathFunc = (x: number, y: number): number => {
  return x - y
}
// class
class Person {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  register() {
    return `${this.name} is registered`
  }
}
const brad = new Person(1, 'Mike Jordan')
// Implement Interface in Class
interface IPerson {
  id: number,
  name: string,
  register(): string
}
class MyPerson implements IPerson {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  register() {
    return `${this.name} is registered`
  }
}
// Extending Classes
class Employee extends MyPerson {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}
// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}
let numArr = getArray<number>([1, 2, 3, 4, 5])
let stringArr = getArray<string>(['John', 'Mike', 'Bradley'])
