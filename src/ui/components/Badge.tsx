
interface BadgeProps {
  text: string;
  textColor: string;
  borderColor: string;
}

const Badge: React.FC<BadgeProps> = ({ text, textColor, borderColor }) => {
  return (
    <span className={`inline-flex  ${textColor} border ${borderColor} text-xs font-semibold px-2 py-1 rounded-lg`}>
      {text}
    </span>
  );
};

export default Badge;
