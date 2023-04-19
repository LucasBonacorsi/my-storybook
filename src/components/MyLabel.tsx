import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is the label
   */
  label: string;
  /**
   * This is the size of the label
   * */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * This is the color of the label
   * */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * this is the all caps property
   *
   * */
  allCaps?: boolean;

  /**
   * This is the font color
   * 
   * */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  ...props
}: MyLabelProps) => {
  return (
    <span style={{color: fontColor}} className={`label text-${color} ${size}`} {...props}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
