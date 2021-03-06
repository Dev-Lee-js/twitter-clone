import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="닉네임을 입력하세요."
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="프로필 수정하기"
          className="formBtn"
          style={{
            marginTop: 10,
            marginBottom: 10
          }}          
        />
        <a href="#/">취소하기</a>
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
      로그아웃
      </span>
    </div>
  );
};
