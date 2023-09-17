import { benchmark } from './benchmark.js';
import { DoubleLinkedList } from './linked-list.js';

const ELEMENTS_COUNT = 200_000;

function stack() {
    const arr = [];
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.push(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.pop();
    }
}

function stackList() {
    const arr = new DoubleLinkedList();
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.push(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.pop();
    }
}

function queue() {
    const arr = [];
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.push(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.shift();
    }
}

function queueList() {
    const arr = new DoubleLinkedList();
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.push(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.shift();
    }
}

function deque() {
    const arr = [];
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.unshift(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.pop();
    }
}

function dequeList() {
    const arr = new DoubleLinkedList();
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.unshift(i);
    }
    for (let i = 0; i < ELEMENTS_COUNT; i++) {
        arr.pop();
    }
}

benchmark(stack, 3);
benchmark(stackList, 3);
benchmark(queue, 3);
benchmark(queueList, 3);
benchmark(deque, 3);
benchmark(dequeList, 3);
