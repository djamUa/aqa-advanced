// Завдання 1

// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	printInfo() {
		console.log(`Name: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (typeof value === "string" && value.length > 0) {
			this._title = value;
		} else {
			console.error("Not valid name");
		}
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value === "string" && value.length > 0) {
			this._author = value;
		} else {
			console.error("Not valid author");
		}
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (Number.isInteger(value) && value > 0) {
			this._year = value;
		} else {
			console.error("Not valid year");
		}
	}

	static getOldestBook(books) {
		return books.reduce((oldest, current) => {
			return current.year < oldest.year ? current : oldest;
		});
	}
}

const book1 = new Book("Harry Potter", "Joanne Rowling", 1997);
const book2 = new Book("Western Front", "Erich Remarque", 1929);
const book3 = new Book("1984", "George Orwel", 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}

	printInfo() {
		console.log(`Name: ${this.title}, Authir: ${this.author}, year: ${this.year}, fileFormat: ${this.fileFormat}`);
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (typeof value === "string" && value.length > 0) {
			this._fileFormat = value;
		} else {
			console.error("Not valid fileFormat");
		}
	}

	static createFromBook(book, fileFormat) {
		return new EBook(book.title, book.author, book.year, fileFormat);
	}
}

const ebook1 = new EBook("Lord of the Ring", "R.Tolkien", -500, "pdf");
ebook1.printInfo();

ebook1.title = "NewTitle";
ebook1.author = "NewAuthor";
ebook1.year = 2024;
ebook1.fileFormat = "pdf";
ebook1.printInfo();

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.getOldestBook(books);
console.log("oldBook:", oldestBook);

const ebook2 = EBook.createFromBook(book3, "mobi");
ebook2.printInfo();
