class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {}
    }
    add(word, description) {
        this.words[word] = {
            word: word,
            description: description
        }
    }

    remove(word) {
        delete this.words[word]
    }
    get(word) {
        return this.words[word]
    }
    showAllWords() {
        let values = Object.values(this.words)
        console.log(values)
        values.forEach(item => {
            console.log(`${item.word} - ${item.description}`)
        })


    }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript')
dictionary.showAllWords()
console.log(dictionary)