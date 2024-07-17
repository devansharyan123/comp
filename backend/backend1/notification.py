import smtplib
email = 'arush3218@gmail.com'
password = 'vclrcajjiqxfbydl'

def email_notification(url,user_email):
    connection = smtplib.SMTP('smtp.gmail.com')
    connection.starttls()
    connection.login(user=email, password=password)
    
    message = (
        f'Subject: PRICE DROPPED BELOW YOUR BUDGET FOR THE PRODUCT\n\n'
        f'The price of the product you\'ve been wanting has dropped below your budget! '
        f'Grab the offer now!!\n{url}\n'
    )
    recipient_email = user_email
    connection.sendmail(from_addr=email, to_addrs=recipient_email, msg=message)
    connection.close()
    
    return 'Email sent successfully.'
# email_notification("step this way ",)