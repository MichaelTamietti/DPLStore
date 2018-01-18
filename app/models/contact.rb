class Contact < MailForm::Base
  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :subject, :validate  => true

  def headers
    {
      :subject => "#{subject}",
      :to => "henry@devpointlabs.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
