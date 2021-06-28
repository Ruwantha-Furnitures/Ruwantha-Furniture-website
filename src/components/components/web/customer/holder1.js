function useIsMountedRef(){  const isMountedRef = useRef(null);  useEffect(() => {    isMountedRef.current = true;    return () => isMountedRef.current = false;  });  return isMountedRef;}
function Pets() {
  const [pets, dispatch] = useReducer(petsReducer, initialState);
  const isMountedRef = useIsMountedRef();
  const onChange = ({ target }) => {
    dispatch({ type: "PET_SELECTED", payload: target.value });
  };

  useEffect(() => {
    if (pets.selectedPet) {
      dispatch({ type: "FETCH_PET" });
      getPet(pets.selectedPet).then(data => {
        if(isMountedRef.current){          dispatch({ type: "FETCH_PET_SUCCESS", payload: data });
        }
      });
    } else {
      dispatch({ type: "RESET" });
    }
  }, [pets.selectedPet, isMountedRef]);

  return (
    <div>
      <select value={pets.selectedPet} onChange={onChange}>
        <option value="">Select a pet</option>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
      </select>
      {pets.loading && <div>Loading...</div>}
      {pets.petData && <Pet {...pets.petData} />}
    </div>
  );
}