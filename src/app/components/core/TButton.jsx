const { default: Link } = require("next/link")


const TButton = ({
  color = 'indigo',
  //to = '',
  circle = false,
  href = '',
  link = false,
  target = '_blank',
  onClick = () => {},
  children
}) => {

  let classes = [
    "flex",
    "whitespace-nowrap",
    "text-sm",
    "border",
    "border-transparent",
  ]

  if(link) {
    classes = [
      ...classes,
      "transition-colors"
    ]


  switch(color) {
    case "indigo":
      classes = [
        ...classes,
        "text-indigo-500",
        "focus:border-indigo-500",
      ]
      break
  }

}else {
  classes = [
    ...classes,
    "text-white",
    "focus:ring-2",
    "focus:ring-offset-2",
  ]

  switch(color) {
    case "indigo":
      classes = [
        ...classes,
        "bg-indigo-600",
        "hover:bg-indigo-700",
        "focus:ring-indigo-500",
      ]
      break
    case "red":
      classes = [
        ...classes,
        "bg-red-600",
        "hover:bg-red-700",
        "focus:ring-red-500",
      ]

      break
  }

}

if(circle) {
  classes = [
    ...classes,
    "h-8",
    "w-8",
    "items-center",
    "rounded-full",
    "text-sm",

  ]
}else {
  classes = [
    ...classes,
    "p-0",
    "px-4",
    "py-2",
    "rounded-md",
  ]
}

  return (
    <>
      {href && (<Link href={href} className={classes.join(" ")} target={target}>{children}</Link>) }
      {!href && (<button onClick={onClick} className={classes.join(" ")}>{children}</button>) }
    </>
  )

}

export default TButton
