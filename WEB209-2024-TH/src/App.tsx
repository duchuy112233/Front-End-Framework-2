import React from "react";
import "./App.css";
import { User } from "./interfaces/User";

/**
 * ! Tao ra object userInfor chua thong tin ca nhan (ten, tuoi, que quan, email, GPA, major, gender, hobbies, ... ) va in ra man hinh!
 */

const userInfor: User = {
	userName: "Nguyen duc huky",
	age: 18,
	email: "aa@gmail.com",
	GPA: 3.5,
	address: "hd",
	major: "web",
	password: "123456789",
	gender: "nam",
};

// ! props = properties

type Props = { name: string; age: number };
const Hello = (props: Props) => {
	return (
		<h1 className="text-[20px] text-red-500">
			 {props.name} - {props.age} 
		</h1>
	);
};

/**
 * Tạo nút bấm sử dụng useState để thay đổi theme của trang web.
 */

function App() {
	return (
		<>
			{/* {Component Hello} */}
			<Hello  name={"huy"} age={18} />
		

			{/* Hàm Hello */}
			{/* {Hello("Hoang")}  */}
		</>
	);
}

export default App;
