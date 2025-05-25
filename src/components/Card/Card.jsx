import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function PlayerNameCard({
  title,
  label,
  inputRef,
  handleClick,
  options,
  emogiState,
  setEmogiState,
}) {
  return (
    <Card
      sx={{
        padding: { xs: "0.5rem", sm: "1rem" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: "1rem",
      }}
      style={{ borderRadius: "1rem" }}
    >
      <CardContent>
        <h3>{title}</h3>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: { xs: "100%", sm: "90%" } },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label={label} inputRef={inputRef} />
            <FormControl >
              <InputLabel id="Select-label">Emoji</InputLabel>
              <Select
                labelId="Select-label"
                id="demo-simple-select"
                value={emogiState}
                label="Emogi"
                onChange={(e) => setEmogiState(e.target.value)}
              >
                {options.map((option, id) => {
                  return (
                    <MenuItem key={id} value={`${option}`}>
                      {option.map((emoji, id_) => (
                        <span key={id_} style={{ display: "inline" }}>
                          {emoji}
                        </span>
                      ))}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleClick} fullWidth>
              Submit
            </Button>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}

export { PlayerNameCard };
