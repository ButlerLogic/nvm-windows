package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("Here")
	content, err := os.ReadFile("./nvm.iss")
	fmt.Println(string(content), err)
}
