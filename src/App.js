import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Layout from "scenes/layout";
import DeviceList from "scenes/device_list";
import Settings from "scenes/settings";
import DeviceDetails from "scenes/device";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route
                                path="/"
                                element={<Navigate to="/home" replace />}
                            />
                            <Route path="/home" element={<Dashboard />} />
                            <Route
                                path="/devicelist"
                                element={<DeviceList />}
                            />
                            <Route path="/settings" element={<Settings />} />
                            <Route
                                path="/device/:id"
                                element={<DeviceDetails />}
                            />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
