from .models import Pokemon

def searchFunction(searchString):
    if searchString == '' or searchString == None or searchString == '*':
        return Pokemon.objects.values_list('id', 'name')
    else:
        searchList = []
        searchStringCharList = []
        for char in searchString:
            searchStringCharList.append(char.lower())
        searchLength = len(searchStringCharList)
        pokemonNames = Pokemon.objects.values_list('id', 'name')
        for element in pokemonNames:
            thisName = element[1].lower()
            elementArray = [element[0], element[1]]
            searchWordValue = 0
            for index, value in enumerate(thisName):
                if index <= searchLength - 1:
                    if value == searchStringCharList[index]:
                        if index == 0:
                                searchWordValue += 1
                        else:
                            searchWordValue += .99
            searchWordValue = searchWordValue/searchLength
            elementArray.append(searchWordValue)
            if len(searchList) == 0:
                searchList.append(elementArray)
            else:
                if (searchList[len(searchList)-1][2] >= elementArray[2] ):
                    searchList.append(elementArray) 
                else:
                    for i in searchList:
                        if i[2] <= elementArray[2]:
                            searchList.insert(searchList.index(i), elementArray)
                            break
            if len(searchList) > 10:
                searchList.pop(10)

    return searchList