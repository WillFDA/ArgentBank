import { useSelector, useDispatch } from "react-redux";
import {
  setIsCollapsed,
  setIsEditingNote,
  setIsEditingCategory,
  setNoteValue,
  setCategoryValue,
} from "../redux/features/transactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const TransactionsItems = () => {
  const dispatch = useDispatch();
  const {
    isCollapsed,
    isEditingNote,
    isEditingCategory,
    noteValue,
    categoryValue,
  } = useSelector((state) => state.transactions);

  const handleCollapsedOnClick = (e) => {
    e.preventDefault();
    dispatch(setIsCollapsed());
  };

  const handleEditNoteClick = (e) => {
    e.stopPropagation();
    dispatch(setIsEditingNote());
  };

  const handleEditCategoryClick = (e) => {
    e.stopPropagation();
    dispatch(setIsEditingCategory());
  };

  const handleSaveNoteClick = (e) => {
    e.stopPropagation();
    dispatch(setIsEditingNote());
  };

  const handleSaveCategoryClick = (e) => {
    e.stopPropagation();
    dispatch(setIsEditingCategory());
  };

  const handleNoteChange = (e) => {
    dispatch(setNoteValue(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setCategoryValue(e.target.value));
  };

  return (
    <section className="transaction">
      <FontAwesomeIcon
        onClick={handleCollapsedOnClick}
        className={`chevron ${
          isCollapsed ? "chevron-rotate" : "chevron-unrotate"
        }`}
        icon={faChevronDown}
      />
      <div className="transaction_wrapper">
        <div className="transaction-left">
          <span>27/02/2020</span>
          <span>Golden Sun Bakery</span>
        </div>
        <div className="transaction-right">
          <span>$8.00</span>
          <span>$298.00</span>
        </div>
      </div>
      {isCollapsed && (
        <div className="transaction_wrapper_bottom">
          <div className="transaction_details">
            <span>Transaction Type</span>
            <span>Transaction Category</span>
            <span>Note</span>
          </div>
          <div className="transaction-inputs">
            <span>Electronic</span>
            <div className="transaction-category">
              {isEditingCategory ? (
                <>
                  <select value={categoryValue} onChange={handleCategoryChange}>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                  <button className="pen" onClick={handleSaveCategoryClick}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </>
              ) : (
                <>
                  <span>{categoryValue}</span>
                  <button className="pen" onClick={handleEditCategoryClick}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </>
              )}
            </div>
            <div className="transaction-note">
              {isEditingNote ? (
                <>
                  <textarea value={noteValue} onChange={handleNoteChange} />
                  <button className="pen" onClick={handleSaveNoteClick}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </>
              ) : (
                <>
                  <span>{noteValue}</span>
                  <button className="pen" onClick={handleEditNoteClick}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TransactionsItems;
