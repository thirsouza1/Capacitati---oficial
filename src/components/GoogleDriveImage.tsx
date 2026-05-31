import React, { useState } from "react";

interface GoogleDriveImageProps extends React.ComponentPropsWithoutRef<"img"> {
  driveId: string;
}

export default function GoogleDriveImage({ driveId, className, ...props }: GoogleDriveImageProps) {
  const formats = [
    `https://drive.google.com/thumbnail?id=${driveId}&sz=w600`,
    `https://lh3.googleusercontent.com/d/${driveId}`,
    `https://drive.google.com/uc?export=view&id=${driveId}`
  ];
  
  const [index, setIndex] = useState(0);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (index < formats.length - 1) {
      setIndex(index + 1);
    } else if (props.onError) {
      props.onError(e);
    }
  };

  return (
    <img
      src={formats[index]}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
