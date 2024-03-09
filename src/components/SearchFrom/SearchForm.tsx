import React, { useCallback, useState } from "react";
import "./styles.css";
import { searchActions } from "../../store/searchSlice";
import { getPerson } from "../../store/asynkThunk/getPerson";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getSearchValue } from "../../store/selectors/getSearchValue";

export function SearchForm() {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(getSearchValue);

  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setField(e.target.value.trim()));
    // Если таймер уже запущен, сбрасываем его
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    // Устанавливаем новый таймер для отправки запроса через 1 секунду
    const timeout = setTimeout(() => {
      if (e.target.value.trim()) {
        dispatch(getPerson(e.target.value.trim()));
      }
    }, 1000);
    setTypingTimeout(timeout);
  }, [dispatch, typingTimeout]);

  // Обработчик нажатия клавиши "Enter" в поле ввода
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (searchValue) {
          dispatch(getPerson(searchValue));
        }
      }
    },
    [dispatch, searchValue]
  );

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          placeholder="Найти"
          onChange={handleUsernameChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
}
