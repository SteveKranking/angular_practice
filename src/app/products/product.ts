export class Product {
	private static _id: number = 0;
	title: string;
	price: number;
	img: string;

	constructor(title?: string, price?: number, img?: string) {
		this.title = title;
		this.price = price;
		this.img = img || '../../assets/placeholder.jpg';
		Product.id++;
	}

	static set id(val: number) {
		Product._id = val;
	}

	static get id() {
		return Product._id;
	} 
}
