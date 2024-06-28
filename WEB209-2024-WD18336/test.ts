{
	function reRender() {
		// cap nhat lai component ma chua state bi thay doi!
	}
	const useState = (initState: any) => {
		let state = initState;
		function setState(newState) {
			state = newState;
			reRender();
		}
		return [state, setState];
	};
	const [products, setProducts] = useState([]);
}
