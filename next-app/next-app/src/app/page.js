import Image from "next/image";
import styles from "./page.module.css";
//import CustomCard from "@/components/CustomCard";
// import BasicGrid from "@/components/BasicGrid";
import MUIForm from "@/components/MUIForm";
import MUIDialog from "@/components/MUIDialog";
import SxExample from "@/components/SxExample";
import BasicUsage from "@/components/BasicUsage";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "@/themes/tealTheme";
<ThemeProvider theme={tealTheme}>{/* App.jsx components */}</ThemeProvider>;
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <BasicGrid />; */}
      {/* <MUIForm /> */}
      <MUIDialog />
      <SxExample />
      <BasicUsage />
      <ThemeProvider theme={tealTheme}>
        {" "}
        <MUIForm />
      </ThemeProvider>
    </main>
  );
}
