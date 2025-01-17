BEGIN
    // Function to perform insertion sort
    FUNCTION insertionSort(array)
        // Loop through each element in the array starting from the second element
        FOR i FROM 1 TO LENGTH(array) - 1 DO
            // Pick the current element to be inserted
            key <- array[i]
            j <- i - 1

            // Shift elements of the sorted sequence that are greater than the key
            WHILE j >= 0 AND array[j] > key DO
                array[j + 1] <- array[j]
                j <- j - 1
            ENDWHILE

            // Insert the key at the correct position
            array[j + 1] <- key
        ENDFOR

        // Return the sorted array
        RETURN array
    END FUNCTION

    // Input array
    DISPLAY "Enter the array elements separated by spaces:"
    inputString <- READ_LINE
    array <- SPLIT(inputString, " ") // Convert input string to an array of numbers
    FOR i FROM 0 TO LENGTH(array) - 1 DO
        array[i] <- TO_INTEGER(array[i]) // Ensure all elements are integers
    ENDFOR

    // Call the insertionSort function
    sortedArray <- insertionSort(array)

    // Output the sorted array
    DISPLAY "Sorted Array: "
    FOR i FROM 0 TO LENGTH(sortedArray) - 1 DO
        DISPLAY sortedArray[i]
    ENDFOR
END
