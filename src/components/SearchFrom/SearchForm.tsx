import React, { useCallback } from "react";
import "./styles.css";
import { searchActions } from "../../store/searchSlice";
import { getPerson } from "../../store/asynkThunk/getPerson";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getSearchValue } from "../../store/selectors/getSearchValue";

export function SearchForm() {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(getSearchValue);
  
  const handleUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setField(e.target.value));
  }, [dispatch]);

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
          onChange={(e) => handleUsername(e)}
          onKeyDown={handleKeyDown}
          />
      </form>
    </div> 
  );
}
