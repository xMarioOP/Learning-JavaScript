/*
Finding Substring Indices
Given an array of strings and a target string, write a function to determine if the target string is present
in the array. If it is present, return the index of the first occurrence and the index of the last
occurrence; otherwise, return -1.
*/

const stringArray = ["Kindred", "Darius", "Martin", "Sandra", "Kindred", "Garen"]

function findingSubstringIndices(array, string) {
    const lowerCaseArray = array.map(item => item.toLowerCase())
    const lowerCaseString = string.toLowerCase()

    let firstIndex = lowerCaseArray.indexOf(lowerCaseString)
    let lastIndex = lowerCaseArray.lastIndexOf(lowerCaseString)

    firstIndex === -1 || lastIndex === -1 ?
        console.log("The element doesn't exist", firstIndex) :
        console.log("The first index is: ", firstIndex, "The last index is: ", lastIndex)
}

findingSubstringIndices(stringArray, "MaRiO")
findingSubstringIndices(stringArray, "KiNdRed")