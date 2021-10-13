import style from './styles.module.scss';

export const QrCode = ({ data }) => {
  return (
    <div className={ style.qrCode }>
      <div className={ style.qrCodeTitle }>Payment code</div>
      <div className={ style.qrCodeImage }>
        <img src={ data.image } alt={ data.code } />
      </div>
      <div className={ style.qrCodeText }>{ data.code }</div>
    </div>
  )
}

export default QrCode;