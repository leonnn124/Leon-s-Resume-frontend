import React from "react";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { sortMsg } from "../redux/msgSlice";

const FilterPopover = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [value, setValue] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
    setTime(newValue.format("YYYY-MM-DD"));
  };

  const filterMsg = () => {
    setAnchorEl(null);
    setName("");
    setMessage("");
    setTime("");
    setValue("");
    dispatch(
      sortMsg({
        name: name,
        message: message,
        time: time,
      })
    );
  };

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        FILETER
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 180,
            margin: "10px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Name"
            inputProps={{ "aria-label": "search name" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Paper>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 180,
            margin: "10px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Message"
            inputProps={{ "aria-label": "search message" }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Paper>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 180,
              margin: "10px",
            }}
          >
            <DesktopDatePicker
              disableMaskedInput={true}
              inputFormat="YYYY-MM-DD"
              value={value}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField sx={{ width: "180px" }} size={"small"} {...params} />
              )}
            />
          </Stack>
        </LocalizationProvider>

        <IconButton
          onClick={filterMsg}
          sx={{ float: "right", margin: "3px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Popover>
    </>
  );
};

export default FilterPopover;
