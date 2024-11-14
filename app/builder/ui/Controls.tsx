import { Button } from "@mui/material";

export default function Controls() {
  const onAddBlockClick = () => {
    alert(
      "TODO: Implement adding a block, probably a search+drag+drop type of thing instead of a button"
    );
  };

  return (
    <div>
      <Button onClick={onAddBlockClick}>Add Block</Button>
    </div>
  );
}
