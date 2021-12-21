import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL } from "../../lib/api/axios";
import { User } from "../../lib/interface/user";
import { Logo } from "../../utils/assets";
import * as S from "./style";

const Login = () => {
  const { push } = useHistory();
  const [btnColor, setBtnColor] = useState<boolean>(false);
  const [inputs, setInputs] = useState<User>({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === "password") {
      value.length >= 8 ? console.log(true) : console.log(false);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/teacher/login`, { id, password })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        push("/main");
      })
      .catch((e) => console.log(e));

    setInputs({ id: "", password: "" });
  };

  useEffect(() => {
    id.length > 0 && password.length >= 8
      ? setBtnColor(true)
      : setBtnColor(false);
  }, [id.length, password.length]);

  return (
    <S.LoginWrapper>
      <S.LoginBox onSubmit={(e) => onSubmit(e)} btnColor={btnColor}>
        <img src={Logo} alt="픽로고" />
        <div className="input_box">
          <input
            type="text"
            value={id}
            name="id"
            onChange={(e) => onChange(e)}
            placeholder="id"
          />
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => onChange(e)}
            placeholder="password"
          />
        </div>
        <button>login</button>
      </S.LoginBox>
    </S.LoginWrapper>
  );
};

export default Login;
