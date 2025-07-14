import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Checkbox from "@mui/material/Checkbox";
import Grade from "@mui/icons-material/Grade";
import Star from "@mui/icons-material/Star";


const randomPlaceholders = [
  "Buy mom flowers",
  "Finish the project report",
  "Call the dentist",
  "Plan weekend trip",
  "Read a new book",
  "Grocery shopping",
  "Prepare for the meeting",
  "Organize the closet",
  "Clean the garage",
  "Schedule car maintenance",
  "Send birthday invitations",
  "Update resume",
  "Learn a new skill",
  "Practice coding",
  "Watch a documentary",
  "Cook a new recipe",
  "Exercise for 30 minutes",
  "Meditate for relaxation",
  "Write in a journal",
  "Plan next week's meals",
];

const getRandomPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * randomPlaceholders.length);
  return randomPlaceholders[randomIndex];
};

const FieldComponent = ({
  title,
  setTitle,
  description,
  setDescription,
  isImportant,
  setIsImportant,
  category,
  setCategory,
  setCardColor,
  colors
}) => {
  const [placeholder, setPlaceholder] = React.useState(getRandomPlaceholder());
  const titleInputRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (document.activeElement !== titleInputRef.current) {
      setPlaceholder(getRandomPlaceholder());
    }
  };

  const handleChangeCategory = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
      setCardColor(colors[newCategory]);
    }
  };

  const handleChangeImportance = (event) => {
    setIsImportant(event.target.checked);
  };

  return (

   
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <Box className="form-fieldTitleInput">
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1, marginLeft: 0, color: "#262626" }}
          >
            Title:
          </Typography>

          <TextField
            id="outlined-multiline-flexible"
            label="Add a title"
            multiline
            inputRef={titleInputRef}
            onMouseEnter={handleMouseEnter}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            maxRows={4}
            placeholder={placeholder}
            sx={{
              width: "400px !important",
              margin: "8px 8px 8px 0px !important",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#bf7a5f",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#bf7a5f",
              },
            }}
          />

           <Checkbox icon={<Grade />} checkedIcon={<Star />} sx={{ "&.Mui-checked": { color: "#EDCC7B" } }} checked={isImportant} onChange={handleChangeImportance} />
        </Box>
        <Box className="form-fieldDescriptionInput">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginLeft: 0,
              color: "#262626",
            }}
          >
            Description:
          </Typography>

          <TextField
            id="outlined-multiline-static"
            label="Add a description"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        
            sx={{
              width: "470px !important",
              margin: "8px 8px 8px 0px !important",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#bf7a5f",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#bf7a5f",
              },
            }}
          />
        </Box>

        <Box className="form-fieldCategoryInput">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              mt: 2,
              marginLeft: 0,
              color: "#262626",
            }}
          >
            Choose a category:
          </Typography>

          <ToggleButtonGroup
            value={category}
            exclusive
            onChange={handleChangeCategory}
            aria-label="Category"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            <ToggleButton value="work" aria-label="Work">
              🧑‍💼 Work
            </ToggleButton>
            <ToggleButton value="home" aria-label="Home">
              🏠 Home
            </ToggleButton>
            <ToggleButton value="hobby" aria-label="Hobby">
              🎨 Hobby
            </ToggleButton>
            <ToggleButton value="another" aria-label="Another">
              🌀 Another
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default FieldComponent;
