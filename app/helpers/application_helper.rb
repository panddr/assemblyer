module ApplicationHelper

  def header_locale
    I18n.t('header')
  end
  
  def main_locale
    I18n.t('main')
  end

  def blocks_locale
    I18n.t('blocks')
  end

  def footer_locale
    I18n.t('footer')
  end

  def menu_locale
    I18n.t('menu')
  end

  def social_locale
    I18n.t('social')
  end

  def shared_locale
    I18n.t('shared')
  end

  def meta_locale
    I18n.t('meta')
  end

  def localized_attribute(model, attribute)
    return '' if model.nil?
    model.send("#{attribute}_#{I18n.locale}".to_sym)
  end
end
