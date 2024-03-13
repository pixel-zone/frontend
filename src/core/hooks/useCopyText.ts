interface ICopyText {
  text: string;
}

export const useCopyText = () => {
  const copyText = ({ text }: ICopyText) => {
    const tooltip = document.getElementById(`copy`)!;
    tooltip.innerHTML = `Copied`;

    return navigator?.clipboard.writeText(text);
  };

  function clearTextCopy({ text }: ICopyText) {
    var tooltip = document.getElementById(`copy-${text}`)!;
    tooltip.innerHTML = 'Copy to clipboard';
  }

  return {
    copyText,
    clearTextCopy,
  };
};
