package com.example.javachallenge;

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Fork;
import org.openjdk.jmh.annotations.Mode;

import java.util.ArrayList;
import java.util.List;

public class BenchmarkApplication {
    public static void main(String[] args) throws Exception {
        org.openjdk.jmh.Main.main(args);
    }

    @Fork(value = 1, warmups = 1)
    @BenchmarkMode(Mode.Throughput)
    @Benchmark
    public void benchmarkAThing() {
        List<String> list = new ArrayList();
        for(int i = 0; i < 100000; i++) {
            list.add("Hello World!");
        }
    }
}
