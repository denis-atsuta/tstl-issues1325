function test<T>(iterator: Iterator<T, T>) {
    iterator.return && iterator.return();
}