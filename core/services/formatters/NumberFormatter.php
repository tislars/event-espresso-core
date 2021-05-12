<?php

namespace EventEspresso\core\services\formatters;

use EventEspresso\core\services\locale\Locale;

class NumberFormatter extends LocaleFloatFormatter
{
    /**
     * formats the provided number for the selected locale (defaults to site locale) and returns a string
     *
     * @param Locale   $locale
     * @param float    $number    unformatted number value, ex: 1234.56789
     * @param int|null $precision the number of decimal places to round to
     * @return string             formatted value, ex: '1,234.57'
     */
    protected function format(Locale $locale, float $number, ?int $precision = null)
    {
        $is_negative = $number < 0;
        $precision   = $precision !== null
            ? absint($precision)
            : $locale->decimalPrecision();
        return $this->formatSymbolAndSignPositions(
            $locale,
            $this->formatGroupings(
                $number,
                $precision,
                $locale->decimalPoint(),
                $locale->grouping(),
                $locale->thousandsSeparator()
            ),
            $is_negative
        );
    }


    /**
     * @param Locale $locale
     * @param int    $number
     * @param bool   $is_negative
     * @return string
     */
    protected function formatSymbolAndSignPositions(Locale $locale, int $number, bool $is_negative)
    {
        // format for positive or negative values
        if ($is_negative) {
            $sign     = $locale->negativeSign();
            $position = $locale->negativeSignPosition();
        } else {
            $sign     = $locale->positiveSign();
            $position = $locale->positiveSignPosition();
        }
        switch ($position) {
            case LocaleFloatFormatter::PARENTHESES:
                return "({$number})";
            case LocaleFloatFormatter::SIGN_BEFORE_ALL:
            case LocaleFloatFormatter::SIGN_BEFORE_CURRENCY:
            case LocaleFloatFormatter::SIGN_AFTER_CURRENCY:
                return "{$sign}{$number}";
            case LocaleFloatFormatter::SIGN_AFTER_ALL:
                return "{$number}{$sign}";
        }
        return $number;
    }


    /**
     * formats the provided number for the selected locale (defaults to site locale) and returns a string
     *
     * @param float|int|string $number    unformatted number value, ex: 1234.56789
     * @param int|null         $precision the number of decimal places to round to
     * @param string|Locale    $locale    ex: 'en_US' or Locale object
     * @return string                     formatted value, ex: '1,234.57'
     */
    public function formatForLocale($number, int $precision = null, $locale = ''): string
    {
        $locale = $this->locales->getLocale($locale);
        return $this->format($locale, (float) $number, $precision);
    }


    /**
     * This removes all localized formatting from the incoming value and returns a float
     *
     * @param float|int|string $number formatted numeric value as string, ex: '1,234,567.89'
     * @param string|Locale    $locale ex: 'en_US' or Locale object
     * @return float                   unformatted number value, ex: 1234567.89
     */
    public function parseForLocale($number, $locale = ''): float
    {
        // just return the value if it's not a string
        if (! is_string($number)) {
            return (float) $number;
        }
        $locale = $this->locales->getLocale($locale);
        return $this->filterNumericValue(
            str_replace(
                [
                    $locale->thousandsSeparator(),
                    $locale->decimalPoint(),
                ],
                [
                    '',  // remove thousands separator
                    '.', // convert decimal mark to what PHP expects
                ],
                $number
            )
        );
    }
}
